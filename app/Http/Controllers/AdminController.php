<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $user = Auth::user()->role;
        if ( $user == null) {
            return redirect('/')->with('error', 'Access Denied');
        }
        elseif ( $user == 2){
            return redirect('/student/dashboard')->with('error', 'Access Denied');
        }
        elseif ( $user == 3){
            return redirect('/mentor/dashboard')->with('error', 'Access Denied');
        }
        
        return Inertia::render('Admin/Dashboard');
    }
}
