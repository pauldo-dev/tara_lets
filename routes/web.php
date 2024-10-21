<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentDashboardController;
use App\Http\Controllers\MentorsController;
use App\Http\Controllers\MentorRegistrationController;
// use App\Http\Controllers\DashboardController;
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
    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Dashboard routes
    // Route::get('/admin/dashboard', [DashboardController::class, 'adminDashboard'])->name('admin.dashboard');
    Route::get('/student/dashboard', [StudentDashboardController::class, 'index'])->name('student.dashboard');
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
