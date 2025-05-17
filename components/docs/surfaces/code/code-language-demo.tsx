import { Code } from '@/components/ui'

const code = `<?php

use Illuminate\\Support\\Facades\\Route;
use Inertia\\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});`

export default function CodeLanguageDemo() {
    return <Code code={code} filename='routes/web.php' lang='php' />
}
