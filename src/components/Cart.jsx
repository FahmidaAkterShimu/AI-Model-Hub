import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment successful!");
    }

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id != item.id);
        setCarts(filteredArray);
        toast.success("Item removed from the cart");
    }

    return (
        <div className="py-12 max-w-4xl mx-auto">
            <h1 className='text-5xl font-bold mb-10'>Your Cart</h1>

            {
                carts.length === 0
                    ? <p className="text-2xl text-[#959191] text-center py-20">Your cart is empty</p>
                    : <>
                        {
                            carts.map(item =>
                                <div key={item.id} className="flex justify-between items-center gap-8 border border-zinc-300 hover:border-red-400 rounded-3xl p-4 mb-6 bg-[#F4F4F5]">
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
                                    <button onClick={() => handleDelete(item)} className="hover:text-red-600 cursor-pointer">
                                        <RxCross1 />
                                    </button>
                                </div>
                            )
                        }
                        <div className="flex justify-between bg-black text-3xl font-bold text-white p-8 rounded-3xl my-14">
                            <div>Total</div>
                            <div className="text-[#FF645D]">${totalPrice}</div>
                        </div>

                        <button
                            onClick={handlePayment}
                            className="btn border-none w-full py-9 bg-red-600 hover:bg-red-500 rounded-[18px] font-semibold text-2xl shadow-xl shadow-red-500/30 text-white">Proceed to Checkout
                        </button>
                    </>
            }

        </div>
    );
};

export default Cart;