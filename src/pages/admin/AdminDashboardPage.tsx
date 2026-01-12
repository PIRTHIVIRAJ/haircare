import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { Expert, AdminAuditLog } from '@/types/expert';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, CheckCircle, XCircle, Clock, AlertCircle, Eye, Users, FileText, History } from 'lucide-react';
import { format } from 'date-fns';

const StatusBadge = ({ status }: { status: string }) => {
  const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    pending: 'secondary',
    verified: 'default',
    rejected: 'destructive',
    suspended: 'destructive',
    approved: 'default',
    active: 'default',
    withdrawn: 'secondary'
  };

  return (
    <Badge variant={variants[status] || 'secondary'} className="capitalize">
      {status}
    </Badge>
  );
};

const AdminDashboardPage = () => {
  const { user, loading: authLoading, isAdmin } = useAuth();
  const [experts, setExperts] = useState<Expert[]>([]);
  const [auditLogs, setAuditLogs] = useState<AdminAuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    setLoading(true);
    
    // Fetch all experts
    const { data: expertsData } = await supabase
      .from('experts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (expertsData) {
      setExperts(expertsData as Expert[]);
    }

    // Fetch audit logs
    const { data: logsData } = await supabase
      .from('admin_audit_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);
    
    if (logsData) {
      setAuditLogs(logsData as AdminAuditLog[]);
    }

    setLoading(false);
  };

  const logAction = async (action: string, targetType: string, targetId: string, details?: Record<string, unknown>) => {
    await supabase
      .from('admin_audit_log')
      .insert([{
        admin_user_id: user?.id,
        action,
        target_type: targetType,
        target_id: targetId,
        details: details as any
      }]);
  };

  const handleVerifyExpert = async (expert: Expert) => {
    setActionLoading(true);
    
    const { error } = await supabase
      .from('experts')
      .update({ 
        status: 'verified',
        verified_at: new Date().toISOString()
      })
      .eq('id', expert.id);

    if (error) {
      toast.error('Failed to verify expert');
    } else {
      await logAction('verify_expert', 'expert', expert.id, { expert_name: expert.full_name });
      toast.success(`${expert.full_name} has been verified`);
      fetchData();
    }
    
    setActionLoading(false);
  };

  const handleRejectExpert = async (expert: Expert) => {
    setActionLoading(true);
    
    const { error } = await supabase
      .from('experts')
      .update({ status: 'rejected' })
      .eq('id', expert.id);

    if (error) {
      toast.error('Failed to reject expert');
    } else {
      await logAction('reject_expert', 'expert', expert.id, { expert_name: expert.full_name });
      toast.success(`${expert.full_name} has been rejected`);
      fetchData();
    }
    
    setActionLoading(false);
  };

  const handleSuspendExpert = async (expert: Expert) => {
    setActionLoading(true);
    
    const { error } = await supabase
      .from('experts')
      .update({ status: 'suspended' })
      .eq('id', expert.id);

    if (error) {
      toast.error('Failed to suspend expert');
    } else {
      await logAction('suspend_expert', 'expert', expert.id, { expert_name: expert.full_name });
      toast.success(`${expert.full_name} has been suspended`);
      fetchData();
    }
    
    setActionLoading(false);
  };

  const handleApprovePhoto = async (expert: Expert) => {
    setActionLoading(true);
    
    const { error } = await supabase
      .from('experts')
      .update({ photo_status: 'approved' })
      .eq('id', expert.id);

    if (error) {
      toast.error('Failed to approve photo');
    } else {
      await logAction('approve_photo', 'expert', expert.id, { expert_name: expert.full_name });
      toast.success('Photo approved');
      fetchData();
    }
    
    setActionLoading(false);
  };

  const handleRejectPhoto = async (expert: Expert) => {
    setActionLoading(true);
    
    const { error } = await supabase
      .from('experts')
      .update({ photo_status: 'rejected' })
      .eq('id', expert.id);

    if (error) {
      toast.error('Failed to reject photo');
    } else {
      await logAction('reject_photo', 'expert', expert.id, { expert_name: expert.full_name });
      toast.success('Photo rejected');
      fetchData();
    }
    
    setActionLoading(false);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!isAdmin) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-12 px-4">
          <div className="max-w-lg mx-auto text-center">
            <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
            <h1 className="font-heading text-2xl font-semibold mb-4">Access Denied</h1>
            <p className="text-muted-foreground">
              You don't have permission to access the admin panel.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const pendingExperts = experts.filter(e => e.status === 'pending');
  const pendingPhotos = experts.filter(e => e.photo_url && e.photo_status === 'pending');
  const verifiedExperts = experts.filter(e => e.status === 'verified');

  return (
    <>
      <SEOHead
        title="Admin Dashboard | HairCare.ai"
        description="Admin panel for managing experts and reviews."
        canonicalUrl="https://haircare.ai/admin"
      />
      <Header />
      <main className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-semibold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage experts and review system</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-amber-500" />
                  <div>
                    <p className="text-2xl font-bold">{pendingExperts.length}</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold">{verifiedExperts.length}</p>
                    <p className="text-sm text-muted-foreground">Verified</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">{experts.length}</p>
                    <p className="text-sm text-muted-foreground">Total Experts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-purple-500" />
                  <div>
                    <p className="text-2xl font-bold">{pendingPhotos.length}</p>
                    <p className="text-sm text-muted-foreground">Photo Reviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="pending" className="space-y-6">
            <TabsList>
              <TabsTrigger value="pending" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Pending ({pendingExperts.length})
              </TabsTrigger>
              <TabsTrigger value="photos" className="flex items-center gap-2">
                Photo Reviews ({pendingPhotos.length})
              </TabsTrigger>
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                All Experts
              </TabsTrigger>
              <TabsTrigger value="audit" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                Audit Log
              </TabsTrigger>
            </TabsList>

            {/* Pending Applications */}
            <TabsContent value="pending">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Applications</CardTitle>
                  <CardDescription>
                    Review and verify expert applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="text-center py-8">Loading...</div>
                  ) : pendingExperts.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No pending applications
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Expert</TableHead>
                          <TableHead>Credentials</TableHead>
                          <TableHead>Specialty</TableHead>
                          <TableHead>Country</TableHead>
                          <TableHead>Applied</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pendingExperts.map((expert) => (
                          <TableRow key={expert.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={expert.photo_url} alt={expert.full_name} />
                                  <AvatarFallback>{expert.full_name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{expert.full_name}</p>
                                  <p className="text-sm text-muted-foreground">{expert.years_experience}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{expert.primary_credential}</TableCell>
                            <TableCell>{expert.specialty}</TableCell>
                            <TableCell>{expert.country}</TableCell>
                            <TableCell>{format(new Date(expert.created_at), 'MMM d, yyyy')}</TableCell>
                            <TableCell className="text-right space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="ghost" size="sm" onClick={() => setSelectedExpert(expert)}>
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>{selectedExpert?.full_name}</DialogTitle>
                                    <DialogDescription>
                                      Review expert application details
                                    </DialogDescription>
                                  </DialogHeader>
                                  {selectedExpert && (
                                    <div className="space-y-4">
                                      <div className="flex items-center gap-4">
                                        <Avatar className="h-20 w-20">
                                          <AvatarImage src={selectedExpert.photo_url} />
                                          <AvatarFallback>{selectedExpert.full_name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <p className="font-semibold text-lg">{selectedExpert.full_name}, {selectedExpert.primary_credential}</p>
                                          <p className="text-muted-foreground">{selectedExpert.specialty}</p>
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                          <p className="text-muted-foreground">Country</p>
                                          <p className="font-medium">{selectedExpert.country}</p>
                                        </div>
                                        <div>
                                          <p className="text-muted-foreground">Experience</p>
                                          <p className="font-medium">{selectedExpert.years_experience}</p>
                                        </div>
                                        <div>
                                          <p className="text-muted-foreground">Certification Body</p>
                                          <p className="font-medium">{selectedExpert.certification_body || 'Not provided'}</p>
                                        </div>
                                        <div>
                                          <p className="text-muted-foreground">Registration #</p>
                                          <p className="font-medium">{selectedExpert.registration_number || 'Not provided'}</p>
                                        </div>
                                      </div>
                                      {selectedExpert.bio && (
                                        <div>
                                          <p className="text-muted-foreground text-sm">Bio</p>
                                          <p className="text-sm">{selectedExpert.bio}</p>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                  <DialogFooter>
                                    <Button 
                                      variant="destructive" 
                                      onClick={() => selectedExpert && handleRejectExpert(selectedExpert)}
                                      disabled={actionLoading}
                                    >
                                      <XCircle className="h-4 w-4 mr-2" />
                                      Reject
                                    </Button>
                                    <Button 
                                      onClick={() => selectedExpert && handleVerifyExpert(selectedExpert)}
                                      disabled={actionLoading}
                                    >
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      Verify
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleVerifyExpert(expert)}
                                disabled={actionLoading}
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Verify
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleRejectExpert(expert)}
                                disabled={actionLoading}
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Photo Reviews */}
            <TabsContent value="photos">
              <Card>
                <CardHeader>
                  <CardTitle>Photo Reviews</CardTitle>
                  <CardDescription>
                    Approve or reject expert profile photos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {pendingPhotos.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No photos pending review
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {pendingPhotos.map((expert) => (
                        <Card key={expert.id} className="overflow-hidden">
                          <div className="aspect-square">
                            <img 
                              src={expert.photo_url} 
                              alt={expert.full_name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-3">
                            <p className="font-medium text-sm truncate">{expert.full_name}</p>
                            <p className="text-xs text-muted-foreground">{expert.specialty}</p>
                            <div className="flex gap-2 mt-2">
                              <Button 
                                size="sm" 
                                className="flex-1"
                                onClick={() => handleApprovePhoto(expert)}
                                disabled={actionLoading}
                              >
                                Approve
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="flex-1"
                                onClick={() => handleRejectPhoto(expert)}
                                disabled={actionLoading}
                              >
                                Reject
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* All Experts */}
            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>All Experts</CardTitle>
                  <CardDescription>
                    Manage all registered experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Expert</TableHead>
                        <TableHead>Specialty</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Photo</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {experts.map((expert) => (
                        <TableRow key={expert.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={expert.photo_url} alt={expert.full_name} />
                                <AvatarFallback>{expert.full_name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{expert.full_name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{expert.specialty}</TableCell>
                          <TableCell><StatusBadge status={expert.status} /></TableCell>
                          <TableCell><StatusBadge status={expert.photo_status} /></TableCell>
                          <TableCell>{format(new Date(expert.created_at), 'MMM d, yyyy')}</TableCell>
                          <TableCell className="text-right">
                            {expert.status === 'verified' && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleSuspendExpert(expert)}
                                disabled={actionLoading}
                              >
                                Suspend
                              </Button>
                            )}
                            {expert.status === 'suspended' && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleVerifyExpert(expert)}
                                disabled={actionLoading}
                              >
                                Reinstate
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Audit Log */}
            <TabsContent value="audit">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Log</CardTitle>
                  <CardDescription>
                    Recent admin actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Action</TableHead>
                        <TableHead>Target</TableHead>
                        <TableHead>Details</TableHead>
                        <TableHead>Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {auditLogs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell className="capitalize">{log.action.replace(/_/g, ' ')}</TableCell>
                          <TableCell className="capitalize">{log.target_type}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {log.details ? JSON.stringify(log.details) : '-'}
                          </TableCell>
                          <TableCell>{format(new Date(log.created_at), 'MMM d, HH:mm')}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashboardPage;
