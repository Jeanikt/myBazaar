<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\EmailController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\SocialiteController;
use App\Http\Controllers\GitHubController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('HomePage');
})->middleware(['auth', 'verified'])->name('home');

//SOCIALITE
Route::get('/auth/{provider}/redirect', [SocialiteController::class, 'redirect'])->name('socialite.redirect');
Route::get('/auth/{provider}/callback', [SocialiteController::class, 'callback']);
Route::get('auth/github/callback', [GitHubController::class, 'handleCallback']);

//EMAIL
Route::post('/send-magic-link', [EmailController::class, 'sendMagicLink'])->name('send.magic.link');
Route::get('/verify-email/{token}', [EmailController::class, 'verifyEmail'])->name('verify.email');

//PAGAMENTO
Route::get('/payment', [SellerController::class, 'payment'])->name('seller.payment');
Route::resource('/bazar', SellerController::class)->names([
    'index' => 'seller.bazar',
]);
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
