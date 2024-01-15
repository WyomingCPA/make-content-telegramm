<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class QueueController extends Controller
{
    public function vkSexySetQueue(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $select[] = $value['id'];
        }

        Auth::user()->queuesPost()->attach(array_values($select));

        return response()->json([
            'status' => true,
        ], 200);
    }
}
