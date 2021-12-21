
let login = require('./components/Auth/login.vue').default;
let register = require('./components/Auth/register.vue').default;
let forget = require('./components/Auth/forget.vue').default;
let logout = require('./components/Auth/logout.vue').default;
// END AUTHENTICATION

let home = require('./components/home.vue').default;

// Employee Component
let storeemployee = require('./components/Employee/create.vue').default;
let employee = require('./components/Employee/index.vue').default;
let editemployee = require('./components/Employee/edit.vue').default;

// Supplier Component
let storesupplier = require('./components/Supplier/create.vue').default;
let supplier = require('./components/Supplier/index.vue').default;
let editsupplier = require('./components/Supplier/edit.vue').default;

// Category Component
let storecategory = require('./components/Category/create.vue').default;
let category = require('./components/Category/index.vue').default;
let editcategory = require('./components/Category/edit.vue').default;

// Product Component
let storeproduct = require('./components/Product/create.vue').default;
let product = require('./components/Product/index.vue').default;
let editproduct = require('./components/Product/edit.vue').default;

// Expense Component
let storeexpense = require('./components/Expense/create.vue').default;
let expense = require('./components/Expense/expense.vue').default;
let editexpense = require('./components/Expense/edit.vue').default;

// Salary Component
let salary = require('./components/Salary/all_employee.vue').default;
let paysalary = require('./components/Salary/create.vue').default;
let allsalary = require('./components/Salary/index.vue').default;
let viewsalary = require('./components/Salary/view.vue').default;
let editsalary = require('./components/Salary/edit.vue').default;

// Stock Component
let stock = require('./components/Product/stock.vue').default;
let editstock = require('./components/Product/edit-stock.vue').default;

// Customer Component
let storecustomer = require('./components/Customer/create.vue').default;
let customer = require('./components/Customer/index.vue').default;
let editcustomer = require('./components/Customer/edit.vue').default;

// POS Component
let pos = require('./components/Pos/pointofsale.vue').default;

// Order Component
let order = require('./components/Order/order.vue').default;
let vieworder = require('./components/Order/vieworder.vue').default;
let searchorder = require('./components/Order/search.vue').default;



export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register' },
    { path: '/forget', component: forget, name: 'forget' },
    { path: '/logout', component: logout, name: 'logout' },
    { path: '/home', component: home, name: 'home' },

    // Employee
    { path: '/store-employee', component: storeemployee, name: 'store-employee' },
    { path: '/employee', component: employee, name: 'employee' },
    { path: '/edit-employee/:id', component: editemployee, name: 'edit-employee' },

    // Supplier
    { path: '/store-supplier', component: storesupplier, name: 'store-supplier' },
    { path: '/supplier', component: supplier, name: 'supplier' },
    { path: '/edit-supplier/:id', component: editsupplier, name: 'edit-supplier' },

    // Category
    { path: '/store-category', component: storecategory, name: 'store-category' },
    { path: '/category', component: category, name: 'category' },
    { path: '/edit-category/:id', component: editcategory, name: 'edit-category' },

    // Product
    { path: '/store-product', component: storeproduct, name: 'store-product' },
    { path: '/product', component: product, name: 'product' },
    { path: '/edit-product/:id', component: editproduct, name: 'edit-product' },

    // Expense
    { path: '/store-expense', component: storeexpense, name: 'store-expense' },
    { path: '/expense', component: expense, name: 'expense' },
    { path: '/edit-expense/:id', component: editexpense, name: 'edit-expense' },

    // Salary
    { path: '/given-salary', component: salary, name: 'given-salary' },
    { path: '/pay-salary/:id', component: paysalary, name: 'pay-salary' },
    { path: '/salary', component: allsalary, name: 'salary' },
    { path: '/view-salary/:id', component: viewsalary, name: 'view-salary' },
    { path: '/edit-salary/:id', component: editsalary, name: 'edit-salary' },

    // Stock
    { path: '/stock', component: stock, name: 'stock' },
    { path: '/edit-stock/:id', component: editstock, name: 'edit-stock' },

    // Customer
    { path: '/store-customer', component: storecustomer, name: 'store-customer' },
    { path: '/customer', component: customer, name: 'customer' },
    { path: '/edit-customer/:id', component: editcustomer, name: 'edit-customer' },

    // POS ROUTES
    { path: '/pos', component: pos, name: 'pos' },

    // ORDER ROUTES
    { path: '/order', component: order, name: 'order' },
    { path: '/view-order/:id', component: vieworder, name: 'view-order' },
    { path: '/searchorder', component: searchorder, name: 'searchorder' },

]
