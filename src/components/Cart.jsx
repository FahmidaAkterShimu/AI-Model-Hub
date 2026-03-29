import { RxCross1 } from "react-icons/rx";

const Cart = ({ carts }) => {

    return (
        <div className="py-10 max-w-4xl mx-auto">
            <h1 className='text-5xl font-bold mb-10'>Your Cart</h1>

            {
                carts.map(item =>
                    <div key={item.id} className="flex justify-between items-center gap-8 border border-zinc-300 rounded-3xl p-4 mb-6 bg-[#F4F4F5]">
                        <div>
                            <img className="h-20 w-20 object-contain" src={item.image} alt="" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div className="text-3xl font-bold">
                            ${item.price}
                        </div>
                        <button className="btn btn-ghost">
                            <RxCross1 />
                        </button>
                    </div>
                )
            }
            <div className="flex justify-between bg-black text-3xl font-bold text-white p-8 rounded-3xl">
                <div>Total</div>
                <div>0</div>
            </div>

        </div>
    );
};

export default Cart;