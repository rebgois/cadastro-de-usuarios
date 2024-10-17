// tests/unit/userStore.spec.ts
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "../../stores/userStore";

describe("User Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia()); // Ativa o Pinia para os testes
  });

  it("Deve adicionar um usuário corretamente", () => {
    const store = useUserStore(); // Inicializa a store
    store.addUser({
      id: "1",
      name: "Teste",
      email: "teste@email.com",
      password: "123456",
    });

    expect(store.users.length).toBe(1); // Verifica se o usuário foi adicionado
    expect(store.users[0].name).toBe("Teste");
  });
});
