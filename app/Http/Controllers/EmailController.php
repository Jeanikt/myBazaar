<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\MagicLinkMail;
use Illuminate\Support\Str;

class EmailController extends Controller
{

        /**
     * Send a magic link to the provided email address.
     */
    public function sendMagicLink(Request $request)
    {
        // Validar o e-mail fornecido
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'email'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid email address',
                'errors' => $validator->errors(),
            ], 422);
        }

        // Obter o e-mail do request
        $email = $request->input('email');

        // Gerar o token de verificação e criar o link mágico
        $token = Str::random(60);
        $link = route('verify.email', ['token' => $token]);

        // Enviar o e-mail com o link mágico
        try {
            Mail::to($email)->send(new MagicLinkMail($link));

            return response()->json([
                'status' => 'success',
                'message' => 'Magic link sent successfully',
                'email' => $email,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to send magic link',
            ], 500);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
