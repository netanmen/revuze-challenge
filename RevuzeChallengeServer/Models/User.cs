using System;
using System.Text.Json.Serialization;

namespace RevuzeChallengeServer.Models
{
    public class User
    {
        public string Id { get; set; }
        public DateTime Date { get; set; }
        public int Age { get; set; }

        [JsonPropertyName("name")]
        public string Fullname { get; set; }
        public string Firstname => Fullname.Substring(0, Fullname.IndexOf(" "));
        public string Lastname => Fullname.Substring(Fullname.IndexOf(" ") + 1);
        public string Address { get; set; }
    }
}
