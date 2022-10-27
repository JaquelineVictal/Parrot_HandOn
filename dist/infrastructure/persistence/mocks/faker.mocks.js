"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
class FakerMocks {
    getUsers() {
        let users = [];
        users = this.getUsers();
        return this.getUsers();
    }
    _getUsers() {
        const users = [];
        Array.from({ length: 10 }).forEach(() => {
            users.push({
                indexId: Number(faker_1.faker.finance.amount()),
                name: faker_1.faker.name.fullName(),
                email: String(faker_1.faker.internet.email),
                apartment: Number(faker_1.faker.finance.amount()),
                password: String(faker_1.faker.internet.password),
                photo: faker_1.faker.image.people()
            });
        });
        return users;
    }
}
exports.default = FakerMocks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZXIubW9ja3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmNfYmFjay9pbmZyYXN0cnVjdHVyZS9wZXJzaXN0ZW5jZS9tb2Nrcy9mYWtlci5tb2Nrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJDQUF1QztBQUd2QyxNQUFxQixVQUFVO0lBQzNCLFFBQVE7UUFDSixJQUFJLEtBQUssR0FBbUIsRUFBRSxDQUFDO1FBQy9CLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsT0FBUSxJQUFJLENBQUMsUUFBUSxFQUFxQixDQUFDO0lBQy9DLENBQUM7SUFFTyxTQUFTO1FBQ2IsTUFBTSxLQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUUsRUFBRTtZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNQLE9BQU8sRUFBRSxNQUFNLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxTQUFTLEVBQUMsTUFBTSxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRSxNQUFNLENBQUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3pDLEtBQUssRUFBRSxhQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTthQUM5QixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FFSjtBQXRCRCw2QkFzQkMifQ==