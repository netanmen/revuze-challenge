using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RevuzeChallengeServer.Models;
using RevuzeChallengeServer.Repositories;

namespace RevuzeChallengeServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet()]
        public IEnumerable<User> GetAll([FromQuery] GetAllUsersFiltersModel filters = null)
        {
            return _userRepository.GetAll(filters);
        }

        [HttpGet("{id}")]
        public User GetById([FromRoute] string id)
        {
            return _userRepository.GetById(id);
        }
    }
}
