<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckUserType
{
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check() && auth()->user()->userType === null) {
            return redirect()->route('askUserType');
        }

        return $next($request);
    }
}
