class Attendance < ApplicationRecord
  belongs_to :user
  belongs_to :training

  enum status: { present: "present", absent: "absent", late: "late", excused: "excused" }
end
