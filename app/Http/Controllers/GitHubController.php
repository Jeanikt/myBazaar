<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class GitHubController extends Controller
{
    public function handleCallback()
    {
        try {
            // Obtenha o usuário do GitHub
            $githubUser = Socialite::driver('github')->user();

            // Verifique se o usuário já está registrado
            $user = User::where('github_id', $githubUser->getId())->first();

            if (!$user) {
                // Se o usuário não está registrado, crie um novo registro
                $user = User::create([
                    'name' => $githubUser->getName(),
                    'email' => $githubUser->getEmail(),
                    'github_id' => $githubUser->getId(),
                    // Outros campos conforme necessário
                ]);
            }

            // Faça login no usuário
            Auth::login($user);

            // Redirecione para a página inicial ou uma página protegida
            return redirect()->route('home'); // ou outra rota conforme sua aplicação

        } catch (\Exception $e) {
            // Trate erros conforme necessário
            return redirect('/')->with('error', 'Unable to login with GitHub');
        }
    }
}
