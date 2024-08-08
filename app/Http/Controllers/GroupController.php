<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Source;
use Illuminate\Http\Request;


class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $models = Group::all();
        $count = $models->count();
        return response()->json([
            'groups' => $models->toArray(),
            'count' => $count,
            'status' => true,
        ], 200);
    }

    public function updateStatus(Request $request)
    {
        $id_group = $request->id_group;
        $model = Group::find($id_group);
        if (!isset($model->is_start) || $model->is_start == false)
        {
            $model->is_start = true;

        }
        else {
            $model->is_start = false;
        }
        $model->save();

        return response()->json([
            'status' => true,
        ], 200);
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
        $name = $request->get('name_group');
        $url_group = $request->get('url_group');
        $model = new Group();
        $model->group = $name;
        $model->url_group = $url_group;
        $model->save();

        return response()->json([
            'status' => true,
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function show(Group $group)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        return response([
            'group' => Group::findOrFail($id),
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Group $group)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Group  $group
     * @return \Illuminate\Http\Response
     */
    public function destroy(Group $group)
    {
        //
    }
    public function addSource(Request $request)
    {
        $id_group = $request->get('id_group');
        $name = $request->get('name_source');
        $url_source = $request->get('url_source');
        $model = new Source();
        $model->groups_id = $id_group;
        $model->name = $name;
        $model->url_source = $url_source;
        $model->save();
        return response()->json([
            'status' => true,
        ], 200);
    }

    public function getSource()
    {
        $models = Source::all();
        $count = $models->count();
        return response()->json([
            'source' => $models->toArray(),
            'count' => $count,
            'status' => true,
        ], 200);
    }
    public function deleteSource(Request $request)
    {
        $id_source = $request->get('id_source');

        $model = Source::find($id_source);  
        $model->delete();

        return response()->json([
            'status' => true,
        ], 200);
    }
}
