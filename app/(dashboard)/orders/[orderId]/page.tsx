import { DataTable } from "@/components/custom ui/DataTable"
import { columns } from "@/components/orderItems/OrderItemsColumns"

const OrderDetails = async ({ params }: { params: { orderId: string } }) => {
    const res = await fetch(`${process.env.ADMIN_DASHBOARD_URL}/api/orders/${params.orderId}`)
    const { orderDetails, customer } = await res.json()

    const { street, city, state, postalCode, country } = orderDetails.shippingAddress

    return (
        <div className="flex flex-col p-10 gap-5">
            <p className="text-base-bold">
                Order ID: <span className="text-base-medium">{orderDetails._id}</span>
            </p>
            <p className="text-base-bold">
                Nombre del Cliente: <span className="text-base-medium">{customer.name}</span>
            </p>
            <p className="text-base-bold">
                Datos de Entrega: <span className="text-base-medium">{street}, {city}, {state}, {postalCode}, {country}</span>
            </p>
            <p className="text-base-bold">
                Total pagado: <span className="text-base-medium">${orderDetails.totalAmount}</span>
            </p>
            <p className="text-base-bold">
                Shipping rate ID: <span className="text-base-medium">{orderDetails.shippingRate}</span>
            </p>
            <DataTable columns={columns} data={orderDetails.products} searchKey="product" />
        </div>
    )
}

export default OrderDetails