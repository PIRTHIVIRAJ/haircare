import { Sparkles, Paperclip, ArrowRight } from "lucide-react";
import { RefObject } from "react";

interface ChatInputBarProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onAttachmentClick?: () => void;
  onInputFocus?: () => void;
  isExpanded?: boolean;
  isMinimized?: boolean;
  isChatMode?: boolean;
  isLoading?: boolean;
  hasAttachment?: boolean;
  className?: string;
  style?: React.CSSProperties;
  inputRef?: RefObject<HTMLInputElement>;
  isExpanding?: boolean;
  isMinimizing?: boolean;
}

const ChatInputBar = ({
  inputValue,
  onInputChange,
  onSubmit,
  onAttachmentClick,
  onInputFocus,
  isExpanded = true,
  isMinimized = false,
  isChatMode = false,
  isLoading = false,
  hasAttachment = false,
  className = "",
  style = {},
  inputRef,
  isExpanding = false,
  isMinimizing = false,
}: ChatInputBarProps) => {
  const showExpanded = isExpanded && !isMinimized;

  // Fixed height for consistency across all states
  const barHeight = '52px';

  return (
    <form 
      onSubmit={onSubmit}
      onClick={isMinimized ? onAttachmentClick : undefined}
      className={`w-full rounded-full flex items-center ${className}`}
      style={{ 
        height: barHeight,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(var(--primary-rgb), 0.4)',
        boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.15), 0 0 60px rgba(var(--primary-rgb), 0.1)',
        padding: '0 8px',
        cursor: isMinimized ? 'pointer' : 'default',
        overflow: 'visible',
        transition: isMinimized ? 'transform 0.2s ease-out' : undefined,
        transform: 'scale(1)',
        opacity: 1, // Always keep opacity at 1 to preserve blur effect
        ...style,
      }}
      onMouseEnter={(e) => {
        if (isMinimized) {
          e.currentTarget.style.transform = 'scale(1.05)';
        }
      }}
      onMouseLeave={(e) => {
        if (isMinimized) {
          e.currentTarget.style.transform = 'scale(1)';
        }
      }}
    >
      {/* Left content (flexes) */}
      <div
        className="flex items-center min-w-0"
        style={{
          flex: '1 1 auto',
          gap: showExpanded ? '12px' : '12px',
          // Fast transition when expanding or minimizing
          transition: (isExpanding || isMinimizing) ? 'gap 300ms cubic-bezier(0.25, 0.1, 0.25, 1)' : 'gap 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        {/* AI Icon */}
        <div className="relative flex-shrink-0">
          <div 
            className="rounded-full bg-primary/10 flex items-center justify-center"
            style={{
              width: showExpanded ? '36px' : '28px',
              height: showExpanded ? '36px' : '28px',
              // Fast transition when expanding or minimizing
              transition: (isExpanding || isMinimizing) ? 'width 300ms cubic-bezier(0.25, 0.1, 0.25, 1), height 300ms cubic-bezier(0.25, 0.1, 0.25, 1)' : 'width 1500ms cubic-bezier(0.25, 0.1, 0.25, 1), height 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Input - fades out when minimized */}
        <div 
          className="overflow-hidden min-w-0"
          style={{
            opacity: showExpanded ? 1 : 0,
            flex: showExpanded ? '1 1 auto' : '0 0 0px',
            // Fast transition when expanding or minimizing
            transition: (isExpanding || isMinimizing) ? 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1), flex 300ms cubic-bezier(0.25, 0.1, 0.25, 1)' : 'opacity 600ms cubic-bezier(0.25, 0.1, 0.25, 1), flex 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onFocus={onInputFocus}
            className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm whitespace-nowrap"
            style={{ pointerEvents: showExpanded ? 'auto' : 'none' }}
          />
        </div>

        {/* Attachment - fades out when minimized */}
        <div
          className="flex-shrink-0 overflow-hidden"
          style={{
            opacity: showExpanded ? 1 : 0,
            width: showExpanded ? '32px' : '0px',
            // Fast transition when expanding or minimizing
            transition: (isExpanding || isMinimizing) ? 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1), width 300ms cubic-bezier(0.25, 0.1, 0.25, 1)' : 'opacity 600ms cubic-bezier(0.25, 0.1, 0.25, 1), width 1500ms cubic-bezier(0.25, 0.1, 0.25, 1)',
          }}
        >
          <button
            type="button"
            onClick={onAttachmentClick}
            disabled={isLoading}
            className="p-2 text-muted-foreground hover:text-foreground disabled:opacity-50"
            style={{ pointerEvents: showExpanded ? 'auto' : 'none' }}
          >
            <Paperclip className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Submit Button - pinned to the right edge */}
      <button
        type="submit"
        disabled={isChatMode && !inputValue.trim() && !hasAttachment}
        className="flex items-center justify-center bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 flex-shrink-0 whitespace-nowrap gap-2 disabled:opacity-50"
        style={{
          padding: '8px 16px',
        }}
      >
        Ask me
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </button>
    </form>
  );
};

export default ChatInputBar;
