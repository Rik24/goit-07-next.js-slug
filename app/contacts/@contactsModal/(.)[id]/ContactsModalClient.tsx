"use client";

import ContactDetails from "@/components/ContactDetails/ContactDetails";
import ErrorNotification from "@/components/ErrorNotification/ErrorNotification";
import Loader from "@/components/Loader/Loader";
import Modal from "@/components/Modal/Modal";
import { getContactById } from "@/lib/api/contactsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ContactsModalClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: contact,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
  });

  return (
    <Modal>
      {isError && <ErrorNotification />}
      {isLoading && <Loader />}
      {contact && <ContactDetails contact={contact} />}
    </Modal>
  );
}
