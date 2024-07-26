<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    /**
     * Redireciona o usuário para o provedor OAuth.
     *
     * @param  string  $provider
     * @return \Illuminate\Http\Response
     */
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Manipula a resposta do provedor OAuth.
     *
     * @param  string  $provider
     * @return \Illuminate\Http\Response
     */
    public function callback($provider)
    {
        try {
            $socialUser = Socialite::driver($provider)->user();
        } catch (\Exception $e) {
            return redirect('/')->with('error', 'Failed to authenticate with ' . ucfirst($provider));
        }

        $user = User::updateOrCreate(
            [
                'email' => $socialUser->getEmail(),
            ],
            [
                'name' => $socialUser->getName(),
                'password' => bcrypt(Str::random(16)), // Usa Str::random para gerar uma senha aleatória
                'avatar' => $socialUser->getAvatar(),
            ]
        );

        Auth::login($user);

        return redirect()->intended('/HomePage');
    }
}

