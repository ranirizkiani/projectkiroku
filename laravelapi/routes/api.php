<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
// });

Route::get('/get-tasks', [App\Http\Controllers\apiDataController::class, 'index']);
Route::post('/save-tasks', [App\Http\Controllers\TaskController::class, 'saveTasks']);
Route::get('/get-task-lists', [App\Http\Controllers\TaskController::class, 'getTaskLists']);
Route::get('/get-task-by-id/{id}', [App\Http\Controllers\TaskController::class, 'getTasksByTaskListId']);
