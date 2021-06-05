using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using RevuzeChallengeServer.Models;

namespace RevuzeChallengeServer.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly string usersDataPath = "./Data/users.json";
        
        public UserRepository() { }

        public IEnumerable<User> GetAll(GetAllUsersFiltersModel filters = null)
        {
            string jsonString = File.ReadAllText(usersDataPath);
            var users = JsonSerializer.Deserialize<IEnumerable<User>>(
                    jsonString,
                    new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
                );

            if (filters?.StartMonth != null && filters?.EndMonth != null)
            {
                users = users
                    .Where(user => user.Date.Month >= filters.StartMonth && user.Date.Month <= filters.EndMonth);
            }

            if (!String.IsNullOrWhiteSpace(filters?.Name))
            {
                users = users
                   .Where(user => user.Fullname.Trim().ToLower().Contains(filters.Name.Trim().ToLower()));
            }

            users = users.OrderBy(user => user.Lastname);

            return users;
        }

        public User GetById(string id)
        {
            var user = this.GetAll()
                .Where(user => user.Id == id)
                .Single();

            return user;
        }
    }
}
