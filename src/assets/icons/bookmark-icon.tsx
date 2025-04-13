import { cn } from "@/lib/utils";

interface BookmarkIconProps {
  width?: number;
  height?: number;
  className?: string;
}

function BookmarkIcon({
  width = 56,
  height = 56,
  className,
}: BookmarkIconProps) {
  return (
    <svg
      className={cn("peer-has-checked:hidden", className)}
      width={width}
      height={height}
      viewBox="0 0 56 56"
    >
      <g fill="none" fillRule="evenodd">
        <circle fill="var(--bg-bookmark)" cx="28" cy="28" r="28" />
        <path fill="var(--fg-bookmark)" d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}

export default BookmarkIcon;
