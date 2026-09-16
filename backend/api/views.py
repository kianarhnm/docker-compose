from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.contrib.auth import authenticate


@api_view(["POST"])
def login(request):

    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(
        username=username,
        password=password
    )

    if user is not None:
        return Response({
            "message": "Login Successful"
        })

    return Response(
        {
            "error": "Invalid username or password"
        },
        status=401,
    )


def health(request):
    return JsonResponse({"status": "healthy"})
