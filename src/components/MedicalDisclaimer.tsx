import { AlertCircle } from "lucide-react";

const MedicalDisclaimer = () => {
  return (
    <div className="mt-12 p-4 rounded-lg bg-muted/50 border border-border flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
      <p className="text-sm text-muted-foreground">
        <strong>Medical Disclaimer:</strong> This content is for educational purposes only and does not replace medical advice. 
        If you are experiencing significant hair loss or scalp issues, please consult a healthcare professional or dermatologist.
      </p>
    </div>
  );
};

export default MedicalDisclaimer;
