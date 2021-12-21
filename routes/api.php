<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::apiResource('/employee','Api\EmployeeController');
Route::apiResource('/supplier','Api\SupplierController');
Route::apiResource('/category','Api\CategoryController');
Route::apiResource('/product','Api\ProductController');
Route::apiResource('/expense','Api\ExpenseController');
Route::apiResource('/customer','Api\CustomerController');

Route::post('/salary/paid/{id}','Api\SalaryController@Paid');
Route::get('/salary','Api\SalaryController@AllSalary');
Route::get('/salary/view/{id}','Api\SalaryController@ViewSalary');
Route::get('/edit/salary/{id}','Api\SalaryController@EditSalary');
Route::post('/salary/update/{id}','Api\SalaryController@UpdateSalary');

Route::post('/stock/update/{id}','Api\ProductController@UpdateStock');

Route::get('/getting/product/{id}','Api\PosController@GetProduct');

Route::get('/addToCart/{id}','Api\CartController@AddToCart');
Route::get('/cart/product','Api\CartController@CartProduct');
Route::get('/remove/cart/{id}','Api\CartController@RemoveCart');

Route::get('/increment/{id}','Api\CartController@Increment');
Route::get('/decrement/{id}','Api\CartController@Decrement');

Route::get('/vats','Api\CartController@Vats');

Route::post('/orderdone','Api\PosController@Orderdone');

Route::get('/orders','Api\OrderController@TodayOrder');
Route::get('/order/details/{id}','Api\OrderController@OrderDetails');
Route::get('/order/orderdetails/{id}','Api\OrderController@OrderDetailsAll');

Route::post('/search/order','Api\PosController@SearchOrderDate');

// Admin Dashboard Route
Route::get('/today/sell','Api\PosController@TodaySell');
Route::get('/today/income','Api\PosController@TodayIncome');
Route::get('/today/due','Api\PosController@TodayDue');
Route::get('/today/expense','Api\PosController@TodayExpense');
Route::get('/today/stockout','Api\PosController@StockOut');

