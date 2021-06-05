using System.Collections.Generic;
using RevuzeChallengeServer.Models;

namespace RevuzeChallengeServer.Repositories
{
    public interface IUserRepository
    {
        public IEnumerable<User> GetAll(GetAllUsersFiltersModel filters = null);

        public User GetById(string id);
    }
}
