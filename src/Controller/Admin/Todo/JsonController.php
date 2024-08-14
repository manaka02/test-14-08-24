<?php

namespace App\Controller\Admin\Todo;

use App\Service\ApiServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/todo/json')]
class JsonController  extends AbstractController
{
    public function __construct(private readonly ApiServices $apiServices)
    {}

    // get all todos
    #[Route('/list', name: 'app_admin_todo_json')]
    public function todos(): JsonResponse
    {
        $todos = $this->apiServices->getTodos();
        return $this->json($todos);
    }
}