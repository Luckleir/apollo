declare namespace Projeto {
    type Usuario = {
        id?: number | undefined;
        nome: string;
        login: string;
        senha: string;
        email: string;
    };
}

type CamposEditaveis = Exclude<keyof Projeto.Usuario, "id">;
