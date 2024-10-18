<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentDashboardController;
use App\Http\Controllers\MentorsController;
use App\Http\Controllers\MentorRegistrationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/student-dashboard', [StudentDashboardController::class, 'index'])
    ->middleware(['auth'])
    ->name('student-dashboard');

Route::get('/student/mentors', [MentorsController::class, 'index'])
    ->middleware(['auth'])
    ->name('student-dashboard.mentors');

Route::get('mentor/register', [MentorRegistrationController::class, 'create'])
    ->middleware('guest')
    ->name('mentor.register');

Route::post('mentor/register', [MentorRegistrationController::class, 'store'])
    ->middleware('guest');

require __DIR__.'/auth.php';
