const getAllTasks = `
query {
    allTasks(orderBy: REACHED_COUNTER_ASC, condition: { agentId: "7ad38d22-6343-48de-8ef6-f8804434a785", status: 0 ) {
      edges {
        node {
           projectId
           status
           reachedCounter 
           start
           end
           customerId
           customerProfile {
            firstName
            lastName
            company
            salutation
            title
            phone
            mobile
         } 
       }
     }
   }
 }
 `;

 const getTaskById = `
 {
    taskById(id: "4156fa7d-c086-11e7-a534-0050563f0599") {
      id
      agentId
      customerId
      customerProfile {
         firstName
         lastName
         company
         salutation
         title
         phone
         mobile
      } 
    }
  }
  `;

  