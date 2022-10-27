"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(post) {
    if (!post)
        return;
    let userGeneralPost = {
        idpost: post.idpost,
        content: post.content,
        iduser: post.iduser,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        deletedAt: post.updatedAt,
    };
    if (post.logado) {
        userGeneralPost.idpost = post.idpost;
        userGeneralPost.content = post.content(userGeneralPost).iduser = post.iduser;
        userGeneralPost.iduser = post.createdAt;
        userGeneralPost.iduser = post.updatedAt;
    }
    return userGeneralPost;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMubW9kZWxzdG9lbnRpdGllcy5teXNxbC5EQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyY19iYWNrL2luZnJhc3RydWN0dXJlL3BlcnNpc3RlbmNlL215c3FsL2hlbHBlcnMvcG9zdHMubW9kZWxzdG9lbnRpdGllcy5teXNxbC5EQi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1CQUF5QixJQUFRO0lBQzdCLElBQUcsQ0FBQyxJQUFJO1FBQ1IsT0FBTTtJQUVOLElBQUksZUFBZSxHQUFnQjtRQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtRQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztLQUM1QixDQUFBO0lBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFDO1FBQ1YsZUFBK0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxlQUErQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUN0RCxlQUE4QixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckQsZUFBK0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4RCxlQUErQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQzVEO0lBRUQsT0FBUSxlQUErQixDQUFDO0FBQzVDLENBQUM7QUF0QkQsNEJBc0JDIn0=