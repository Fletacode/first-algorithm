const Queue = require('./queue');

function friendRecommendations(network, user){
    return findExternalFriends(network,user);
}


function findExternalFriends(network, username){

    let visited = [];

    const queue = new Queue();

    //유저직접친구 큐에 삽입
    network[username].map((u) =>{
        queue.enqueue(u);
        visited.push(u);
    })
    
    //bfs로 유저 탐색
    while(!queue.isEmpty()){

        let nowName = queue.dequeue();

        network[nowName].map((u) =>{

            if (!visited.includes(u) && u !== username){
                visited.push(u);
                queue.enqueue(u);
            }
        })

        
    }

    //직접친구 필터링
    return visited.filter((u) => !network[username].includes(u));    
}





module.exports = {friendRecommendations};