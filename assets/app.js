

import { registerReactControllerComponents } from '@symfony/ux-react';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import './styles/app.scss';

const $ = require('jquery');
require('bootstrap');

document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            sidebarToggle.innerHTML = '<i class="bi bi-chevron-right"></i>';
        } else {
            sidebarToggle.innerHTML = '<i class="bi bi-chevron-left"></i>';
        }
    });
});

// any CSS you import will output into a single css file (app.css in this case)

import './bootstrap';
registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));