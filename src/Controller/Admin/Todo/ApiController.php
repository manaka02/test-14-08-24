<?php

namespace App\Controller\Admin\Todo;

use App\Repository\TodoRepository;
use App\Service\ApiServices;
use App\Service\TodoServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/admin/api/todo')]
class ApiController  extends AbstractController
{
    public function __construct(
        private readonly SerializerInterface $serializer,
        private readonly TodoRepository $repository,
        private readonly TodoServices $todoServices
    )
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

    // add todo
    #[Route('/add', name: 'app_admin_todo_add_json', methods: ['POST'])]
    public function addTodo(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        try {
            $todo = $this->todoServices->createTodo($data);
            return $this->json([
                'message' => 'Todo created',
                'todoId' => $todo->getId()
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->json($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}