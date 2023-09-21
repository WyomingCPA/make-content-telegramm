<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\RssItem;

class PostController extends Controller
{
    public function rssHabrAll(Request $request)
    {
        $objects = RssItem::where('is_publish', null);
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 20;
        $page = (int) $request->get('page');
        $created_at = $request->get('created_at');

        if ($name !== null) {
            $objects->where('title', 'like', '%' . $name['searchTerm'] . '%');
        }
        $objects->offset($limit * ($page - 1))->limit($limit);
        if ($request->isMethod('post')) {
            return response()->json([
                'posts' => $objects->get()->toArray(),
                'count' => $count
            ]);
        }
    }
}
