import React from "react";

import { Alert } from "react-bootstrap";

export default function Error() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Ошибка! Что то пошло не так!</Alert.Heading>
      <p>Возможно сервер не отвечает, попробуйте зайти позже 😭</p>
    </Alert>
  );
}
