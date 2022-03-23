<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TaskList;
use App\Task;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   
   
     public function store(Request $request)
    {
        //
    }

//[ API 1 - SaveTask ]
// Purpose: save Task and TaskList from land check table
// Input: land check table
// output: <empty>
    public function saveTasks(Request $request)
    {
        // step 1::saveTaskList
        $taskList = new TaskList();
        $taskList->number_of_line = count($request->input);
        $taskList->save();
        // step 2::saveTask
        foreach ($request->input as $t) {
           
            $task = new Task();
            $task->task_list_id = $taskList->id;
            $task->meshcode = $t['meshcode'];
            $task->coordinate = $t['coordinate'];
            $task->kijunfusoku = $t['kijunfusoku'];
            $task->sekisetsu = $t['sekisetsu'];
            $task->akiyouryou = $t['akiyouryou'];
        
            $task->save();
        }
        
    }
 
//[ API 2 - GetTaskList ]
// Purpose: get all TaskList
// Input: <empty>
// Output: array of TaskList
    public function getTaskLists(Request $request)
    {
        $data = TaskList::all();
        return $data;
        //
    }
    // [ API 3 - GetTaskByTaskListId ]
    // Purpose: get tasks with certain TaskList id
    // Input: TaskList id
    // Output: array of Task dimana TaskListId nya sama dengan TaskList id dari input
    public function getTasksByTaskListId($id)
    {

        $data = Task::where('task_list_id', $id)->get();
        return $data;
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
