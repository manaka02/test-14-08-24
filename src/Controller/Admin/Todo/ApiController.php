<?php

namespace App\Controller\Admin\Todo;

use App\Repository\TodoRepository;
use App\Service\ApiServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/admin/api/todo')]
class ApiController  extends AbstractController
{
    public function __construct(
        private readonly SerializerInterface $serializer,
        private readonly TodoRepository $repository)
    {}

    // get all todos
    #[Route('/', name: 'app_admin_todo_json')]
    public function todos(): JsonResponse
    {
        $data = [
            'total' => $this->repository->count([]),
            'data' => $this->repository->findBy([], ['id' => 'DESC'], 5)
        ];
        $responseJson = $this->serializer->serialize($data, 'json', ['groups' => 'todo:read']);

        return new JsonResponse($responseJson, 200, [], true);
    }
}