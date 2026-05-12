// src/components/loaders/product-skeleton.tsx
export function ProductSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl border border-[#e2e8f0]">
      <div className="h-[260px] bg-[#f1f5f9] rounded-t-2xl" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-[#f1f5f9] rounded w-3/4" />
        <div className="h-6 bg-[#f1f5f9] rounded w-1/2" />
        <div className="h-10 bg-[#f1f5f9] rounded" />
      </div>
    </div>
  );
}