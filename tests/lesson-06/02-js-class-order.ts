class Order {

    // declare property
    orderId: number;
    customerName: string;
    items: { name: string; price: number; amount: number; discount: number }[] = [];
    totalAmount = 0;

    // constructor
    constructor(orderId: number, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];

    }

    // method: addItem
    addItem(item: { name: string; price: number; amount: number; discount: number }) {
        this.items.push(item);
    }

    calculateTotal(){
        let total = 0;
        for(let key in this.items){
            const item = this.items[key];
            const itemTotal = (item.price * item.amount) - item.discount;
            total += itemTotal;
        }
        this.totalAmount = total;
        return this.totalAmount;
    }
}

const order01 = new Order(1, "Emma");
order01.addItem({ name: "productA", price: 2_000, amount: 2,discount: 500 });
order01.addItem({ name: "productB", price: 2_000, amount: 2,discount: 500 });
const orderTotal =  order01.calculateTotal();
console.log("Order Total: ",orderTotal);
