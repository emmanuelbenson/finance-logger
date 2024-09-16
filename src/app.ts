import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let marioInvoice: HasFormatter;
let alexPayment: HasFormatter;

// list template inistance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let inputValues: [string, string, number];
    inputValues = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;

    if(type.value === 'invoice') {
        doc = new Invoice(...inputValues);
    }else{
        doc = new Payment(...inputValues)
    }
    
    list.render(doc, type.value, 'end');
    
});


