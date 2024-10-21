<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\MentorsController;
use App\Http\Controllers\MentorRegistrationController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});



Route::middleware('auth')->group(function () {
    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Dashboard routes
    // Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/student/dashboard', [StudentController::class, 'index'])->name('student.dashboard');
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('/mentor/dashboard', [MentorsController::class, 'index'])->name('mentor.dashboard');
    
    // Student-specific routes
    Route::get('/student/mentors', [MentorsController::class, 'index'])->name('student.dashboard.mentors');
});

Route::get('mentor/register', [MentorRegistrationController::class, 'create'])
    ->middleware('guest')
    ->name('mentor.register');

Route::post('mentor/register', [MentorRegistrationController::class, 'store'])
    ->middleware('guest');

require __DIR__.'/auth.php';
