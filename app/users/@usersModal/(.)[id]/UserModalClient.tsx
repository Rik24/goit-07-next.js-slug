"use client";

import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import Modal from "@/components/Modal/Modal";
import UserDetails from "@/components/UserDetails/UserDetails";
import { getUserById } from "@/lib/api/usersApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function UserModalClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    refetchOnMount: false,
  });

  return (
    <Modal>
      {isLoading && <Loader />}
      {isError && <ErrorNotification />}
      {user && <UserDetails user={user} />}
    </Modal>
  );
}
