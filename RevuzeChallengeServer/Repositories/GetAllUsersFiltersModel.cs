namespace RevuzeChallengeServer.Repositories
{
    public class GetAllUsersFiltersModel
    {
        public int? StartMonth { get; set; }
        public int? EndMonth { get; set; }
        public string Name { get; set; }
    }

}