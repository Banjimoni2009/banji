import { useEffect, useState } from "react"

type Product = {
    title: string;
    image: string;
    price: number;
}

function Fetch() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = () => {
            fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if (res.ok){
                    return res.json()
                } else {
                    setError(res.statusText )
                    setLoading(false)
                }
            })
            .then((data) => {
                if (data) {
                    setProducts(data)
                    setLoading(false)
                } 
            })
        }
        // fetch('https://fakestoreapi.com/products')
        // .then((res) => res.json())
        // .then((data) => setProducts(data))
        fetchProducts()
    }, [])
      
    if (loading) {
        return (
            <div className="flex h-screen">
                <p className="text-2xl font-bold">Loading...</p>
            </div>
        )
    }
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl font-bold">Error: {error}</p>
            </div>
        )

    }
    
    
  return (              
    <div>
        <p>Fetch</p>
        <div className="grid grid-cols-3 gap-5 box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;">
            {products.map((product) => (
                <div className=" gap-5 items-center p-2 rounded-lg text-wrap max-w-lg" key={product.title}>
                    <img src={product.image} alt="" className="w-50 h-50 bg-white" />
                    <p className="text-lg font-bold">{product.title}</p>
                    <p className="text-xl font-bold">${product.price}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Fetch