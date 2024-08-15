<?php

namespace App\Controller\Admin\Utilisateur;

use App\Entity\Utilisateur;
use App\Repository\UtilisateurRepository;
use App\Service\ApiServices;
use App\Service\UtilisateurServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/admin/api/utilisateur')]
class ApiController extends AbstractController
{
    public function __construct(
        private readonly UtilisateurServices $utilisateurServices,
        private readonly SerializerInterface $serializer)
    {
    }

    // get Users
    #[Route('/', name: 'app_admin_utilisateur_json', methods: ['GET'])]
    public function users(UtilisateurRepository $repository): JsonResponse
    {
        $list = $repository->findBy([], ['id' => 'DESC'], 5);

        $responseData = [
            'total' => $repository->count([]),
            'data' => $list
        ];
        $responseJson = $this->serializer->serialize($responseData, 'json', ['groups' => 'user:read']);

        return new JsonResponse($responseJson, 200, [], true);
    }

    // add user
    #[Route('/add', name: 'app_admin_utilisateur_add_json', methods: ['POST'])]
    public function addUser(Request $request): JsonResponse
    {

        $data = json_decode($request->getContent(), true);
        try {
            $user = $this->utilisateurServices->createUser($data);
            return $this->json([
                'message' => 'User created',
                'userId' => $user->getId()
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->json($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // update user
    #[Route('/update/{id}', name: 'app_admin_utilisateur_update_json', methods: ['PUT'])]
    public function updateUser(Request $request, Utilisateur $utilisateur): JsonResponse
    {
        // get json data
        $data = json_decode($request->getContent(), true);
        try {
            $user = $this->utilisateurServices->updateUser($utilisateur, $data);
            return new JsonResponse([
                'message' => 'User updated',
                'userId' => $user->getId()
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->json($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // delete user
    #[Route('/delete/{id}', name: 'app_admin_utilisateur_delete_json', methods: ['DELETE'])]
    public function deleteUser(Request $request, Utilisateur $utilisateur): JsonResponse
    {

        try {
            $this->utilisateurServices->deleteUser($utilisateur);
            return new JsonResponse([
                'message' => 'User deleted'
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->json($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

}