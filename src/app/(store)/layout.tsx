import { Header } from "@/components/Header";
import { CartProvider } from "@/context/cart-context";

export interface IStoreLayoutProps {
  children?: React.ReactElement;
}

export default function storeLayout({ children }: IStoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
}
