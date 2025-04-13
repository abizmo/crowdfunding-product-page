import BookmarkIcon from "@/assets/icons/bookmark-icon";
import { cn } from "@/lib/utils";
import { useProjectState } from "@/stores/project-store";
import { useUserActions } from "@/stores/user-store";

function ProductBookmark() {
  const { id } = useProjectState();
  const { isBookmarked, addToBookmarks, removeFromBookmarks } =
    useUserActions();

  const projectBookmarked = isBookmarked(id);

  const handleClick = () => {
    if (projectBookmarked) removeFromBookmarks(id);
    else addToBookmarks(id);
  };

  return (
    <button
      className={cn(
        "flex cursor-pointer items-center gap-4 rounded-full",
        projectBookmarked ? "bg-teal-50" : "bg-neutral-100",
      )}
      type="button"
      role="checkbox"
      aria-checked="false"
      data-state="unchecked"
      onClick={handleClick}
    >
      <BookmarkIcon
        className={
          projectBookmarked
            ? "[--bg-bookmark:var(--color-primary-700)] [--fg-bookmark:var(--color-white)]"
            : "[--bg-bookmark:var(--color-neutral-700)] [--fg-bookmark:var(--color-neutral-100)]"
        }
      />
      <span
        className={cn(
          "hidden pr-6 font-bold sm:inline",
          projectBookmarked ? "text-primary-700" : "text-neutral-500",
        )}
      >
        Bookmark
      </span>
    </button>
  );
}

export default ProductBookmark;
