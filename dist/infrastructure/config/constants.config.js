"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    AUTHENTICATOR: {
        MESSAGES: {
            ERROR: {
                INCORRECT_EMAIL: `E-mail não encontrado`,
                INCORRECT_PASSWORD: `Senha incorreta`,
                AUTHORIZATION_NO: `Usuário não autorizado, verifique se está logado`,
                LOGININCORRECT_YES: `Senha ou e-mail inválidos`
            }
        }
    },
    MIDDLEWARE: {
        MESSAGES: {
            ERROR: {
                BODYFIELDS_NO: `Por favor preencher todos os campos`,
                USERSEXISTS_NO: `Usuário {req.params.iduser} não encontrado`,
                USERSREPEATED_YES: `Usuário {rId} já existe`,
                SERVIDORERROR_YES: `Erro no servidor, chame o Batman`,
                ERRORDELETED_YES: `Erro ao deletar ao post`,
                ERRORUPDATED_YES: `Erro ao atualizar o post`,
                ERRORCREATED_YES: `Erro ao criar o post`,
                ERRORGETBYID_YES: `Erro ao buscar o post por id`,
                ERRORLIST_YES: `Erro ao listar post.`,
            }
        }
    },
    RETURN: {
        MESSAGES: {
            SENDS: {
                EMAILINVALID_YES: `Email (req.body.email) não encontrado`,
                KEYANDEMAILINVALID_YES: `Senha ou e-mail inválidos.`,
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyY19iYWNrL2luZnJhc3RydWN0dXJlL2NvbmZpZy9jb25zdGFudHMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0JBQWU7SUFDWCxhQUFhLEVBQUM7UUFDVixRQUFRLEVBQUU7WUFDTixLQUFLLEVBQUU7Z0JBQ0gsZUFBZSxFQUFFLHVCQUF1QjtnQkFDeEMsa0JBQWtCLEVBQUUsaUJBQWlCO2dCQUNyQyxnQkFBZ0IsRUFBRSxrREFBa0Q7Z0JBQ3BFLGtCQUFrQixFQUFFLDJCQUEyQjthQUNsRDtTQUNKO0tBQ0o7SUFDRCxVQUFVLEVBQUM7UUFDUCxRQUFRLEVBQUM7WUFDTCxLQUFLLEVBQUM7Z0JBQ0YsYUFBYSxFQUFFLHFDQUFxQztnQkFDcEQsY0FBYyxFQUFFLDRDQUE0QztnQkFDNUQsaUJBQWlCLEVBQUUseUJBQXlCO2dCQUM1QyxpQkFBaUIsRUFBRSxrQ0FBa0M7Z0JBQ3JELGdCQUFnQixFQUFFLHlCQUF5QjtnQkFDM0MsZ0JBQWdCLEVBQUUsMEJBQTBCO2dCQUM1QyxnQkFBZ0IsRUFBRSxzQkFBc0I7Z0JBQ3hDLGdCQUFnQixFQUFFLDhCQUE4QjtnQkFDaEQsYUFBYSxFQUFFLHNCQUFzQjthQUV4QztTQUNKO0tBQ0o7SUFDRCxNQUFNLEVBQUM7UUFDSCxRQUFRLEVBQUM7WUFDTCxLQUFLLEVBQUM7Z0JBQ0YsZ0JBQWdCLEVBQUUsdUNBQXVDO2dCQUN6RCxzQkFBc0IsRUFBRSw0QkFBNEI7YUFHdkQ7U0FDSjtLQUNKO0NBQ0osQ0FBQSJ9