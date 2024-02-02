import { PaymentCard } from "../PaymentCard"
export const Pricing = () => {

    return (
        <div
            className="h-full w-full flex justify-around items-center"
        >

            <PaymentCard
                name="Free"
                price="$0.00"
                description="
                No save palette
                "
            />
            <PaymentCard
                name="Light"
                price="$2.50"
                description="
                save up to 2 color palettes
                "
            />
            <PaymentCard
                name="Designer"
                price="$10.00"
                description="
                save up to 10 color palettes
                "
            />
        </div>
    )
}