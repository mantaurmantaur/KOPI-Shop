import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

interface ProductGroup {
  category: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    image_url: string;
    publicUrl: string;
  }>;
}

export default function Products() {
  const [data, setData] = useState<ProductGroup[]>([]);
  const [clicked, setClicked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  useEffect(() => {
    const fetchItems = async () => {
      const { data: products, error } = await supabase
        .from("products_by_category")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        const updatedData = products.map((group: ProductGroup) => ({
          ...group,
          items: group.items.map((item) => {
            const { data: imageData } = supabase.storage
              .from("products_images")
              .getPublicUrl(item.image_url);

            return {
              ...item,
              image_url: imageData.publicUrl,
            };
          }),
        }));
        setData(updatedData);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-3 mb-6">
        {data.map((group) => (
          <button
            key={group.category}
            className="border py-2 px-8 w-fit rounded-lg bg-dbrown text-lyellow cursor-pointer hover:scale-105 hover:shadow-lg transition-transform"
            onClick={() => {
              setClicked(true);
              setSelectedCategory(group.category);
            }}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Items grid */}
      <div className="flex flex-row flex-wrap gap-4">
        {clicked &&
          data
            .filter((group) => group.category === selectedCategory)
            .flatMap((group) =>
              group.items.map((item) => (
                <div
                  key={item.id}
                  className="border-lbrown py-2 px-1 rounded-lg bg-lbrown text-lyellow flex flex-col items-center gap-4 hover:scale-105 hover:shadow-lg transition-transform cursor-pointer"
                >
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={500}
                    height={100}
                    className="rounded-sm w-32 h-32 object-cover"
                    priority
                  />
                  <h3 className="text-sm">{item.name}</h3>
                  <h3 className="text-sm">${item.price.toFixed(2)}</h3>
                </div>
              ))
            )}
      </div>
    </div>
  );
}
